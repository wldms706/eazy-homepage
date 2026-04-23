"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxKTOhXCvygeHrxo-x3QNgE3Zv5kFJcWw7yYue_qbh4kAgATMIhG_J5Yx_B9He0PtKp/exec";

interface DownloadButtonProps {
  file: string;
  fileName: string;
  title: string;
}

type Status = "idle" | "checking" | "loginRequired" | "profileRequired" | "ready" | "downloading";

export function DownloadButton({ file, fileName, title }: DownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [shop, setShop] = useState("");
  const [error, setError] = useState("");
  const [socialLoading, setSocialLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const supabase = createClient();

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setError("");
  }, []);

  const triggerDownload = useCallback(
    async (resourceLabel: string) => {
      try {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim() || "회원",
            phone: phone.trim() || "",
            shop: shop.trim() || "",
            resource: resourceLabel,
            date: new Date().toLocaleString("ko-KR"),
          }),
        });
      } catch {}

      const a = document.createElement("a");
      a.href = `/images/${file}`;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    [file, fileName, name, phone, shop]
  );

  const openModal = async () => {
    setIsOpen(true);
    setStatus("checking");

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setStatus("loginRequired");
      return;
    }

    setUserId(user.id);

    const { data: profile } = await supabase
      .from("profiles")
      .select("name, business_name, shop_phone")
      .eq("id", user.id)
      .single();

    if (!profile || !profile.name || !profile.business_name || !profile.shop_phone) {
      setName(profile?.name || "");
      setShop(profile?.business_name || "");
      setPhone(profile?.shop_phone || "");
      setStatus("profileRequired");
      return;
    }

    // 이미 정보 있음 → 바로 다운로드
    setName(profile.name);
    setShop(profile.business_name);
    setPhone(profile.shop_phone);
    setStatus("downloading");
    await triggerDownload(`${fileName} (회원: ${profile.name})`);
    setTimeout(() => closeModal(), 1200);
  };

  useEffect(() => {
    if (status === "downloading") return;
  }, [status]);

  const handleLogin = async (provider: "kakao" | "google") => {
    setSocialLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(
          window.location.pathname
        )}`,
      },
    });
    if (error) {
      setError(provider === "kakao" ? "카카오 로그인 실패" : "Google 로그인 실패");
      setSocialLoading(false);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    const koreanJamoOnly = /^[ㄱ-ㅎㅏ-ㅣ\s]+$/;
    if (name.trim().length < 2 || koreanJamoOnly.test(name.trim())) {
      setError("성함을 정확히 입력해주세요.");
      return;
    }
    const phoneClean = phone.replace(/-/g, "");
    if (!/^01[0-9]{8,9}$/.test(phoneClean)) {
      setError("휴대폰 번호 11자리를 입력해주세요.");
      return;
    }
    if (shop.trim().length < 2 || koreanJamoOnly.test(shop.trim())) {
      setError("샵 상호명을 정확히 입력해주세요.");
      return;
    }

    setError("");
    setStatus("downloading");

    try {
      await supabase.from("profiles").upsert({
        id: userId,
        name: name.trim(),
        business_name: shop.trim(),
        shop_phone: phoneClean,
      });
    } catch (err) {
      console.error(err);
    }

    await triggerDownload(`${fileName} (신규 가입)`);
    setTimeout(() => closeModal(), 1500);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="resource-btn"
        style={{ border: "none", cursor: "pointer", fontFamily: "inherit" }}
      >
        무료 다운로드 &rarr;
      </button>

      {isOpen && (
        <div
          className="modal-overlay active"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>&times;</button>

            {status === "checking" && (
              <div style={{ padding: 20, textAlign: "center" }}>
                <p style={{ fontSize: "0.95rem", color: "#666" }}>확인 중...</p>
              </div>
            )}

            {status === "loginRequired" && (
              <>
                <h3>{title}</h3>
                <p>간편 로그인 후 한 번만 정보를 입력하면<br />모든 자료를 받으실 수 있어요.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
                  <button
                    type="button"
                    onClick={() => handleLogin("kakao")}
                    disabled={socialLoading}
                    style={{ padding: "14px", background: "#FEE500", color: "#000", border: "none", borderRadius: 12, fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit" }}
                  >
                    {socialLoading ? "로그인 중..." : "카카오로 시작하기"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLogin("google")}
                    disabled={socialLoading}
                    style={{ padding: "14px", background: "#fff", color: "#000", border: "1.5px solid #EBEBEB", borderRadius: 12, fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit" }}
                  >
                    Google로 시작하기
                  </button>
                </div>
                {error && <p style={{ marginTop: 12, fontSize: "0.85rem", color: "#FF4444" }}>{error}</p>}
              </>
            )}

            {status === "profileRequired" && (
              <>
                <h3>마지막 단계!</h3>
                <p>한 번만 입력하시면<br />다음부터는 자동으로 다운로드돼요.</p>
                <form onSubmit={handleSaveProfile}>
                  <input
                    type="text"
                    placeholder="원장님 성함"
                    required
                    minLength={2}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="연락처 (01012345678)"
                    required
                    pattern="[0-9\-]{11,13}"
                    minLength={11}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="샵 상호명"
                    required
                    minLength={2}
                    value={shop}
                    onChange={(e) => setShop(e.target.value)}
                  />
                  {error && <p style={{ fontSize: "0.85rem", color: "#FF4444", marginTop: 4 }}>{error}</p>}
                  <button type="submit" className="modal-submit">
                    저장하고 다운로드
                  </button>
                </form>
                <p className="modal-note">입력하신 정보는 자료 발송 및 안내 외 다른 용도로 사용되지 않습니다.</p>
              </>
            )}

            {status === "downloading" && (
              <div style={{ padding: 20, textAlign: "center" }}>
                <p style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>다운로드 시작!</p>
                <p style={{ fontSize: "0.85rem", color: "#888" }}>{fileName}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
