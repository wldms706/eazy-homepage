"use client";

export default function ResourceSlider() {
  const resourceItems = [
    {
      href: "/resources",
      image: "/images/consent-form.jpg",
      alt: "반영구 시술동의서",
      label: "반영구 시술동의서",
    },
    {
      href: "/resources",
      image: "/images/eyelash-consent.jpg",
      alt: "속눈썹연장 시술동의서",
      label: "속눈썹연장 동의서",
    },
    {
      href: "/resources",
      image: "/images/eyelash-perm-consent.jpg",
      alt: "속눈썹펌 시술동의서",
      label: "속눈썹펌 동의서",
    },
    {
      href: "/resources",
      image: "/images/waxing-consent.jpg",
      alt: "왁싱 시술동의서",
      label: "왁싱 시술동의서",
    },
  ];

  const gptItem = {
    href: "https://chatgpt.com/g/g-699ae58f7f8081919bbaad42e513eb19-rilseu-ver-2",
    external: true,
    label: "릴스 대본 생성기",
    bgColor: "#fff",
    textColor: "#000",
    text: "GPTs",
    fontSize: "2.5rem",
  };

  const youtubeItem = {
    href: "/guides/blog",
    external: true,
    label: "블로그 무료 강의",
    bgColor: "#FF0000",
    textColor: "#fff",
    text: "YouTube",
    fontSize: "2rem",
  };

  const renderImageCard = (item: typeof resourceItems[0], key: number) => (
    <a
      key={key}
      href={item.href}
      style={{
        flexShrink: 0,
        width: "160px",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "#fff",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <img
        src={item.image}
        alt={item.alt}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <p style={{ padding: "10px 12px", fontSize: "0.8rem", fontWeight: 700 }}>
        {item.label}
      </p>
    </a>
  );

  const renderTextCard = (
    item: typeof gptItem,
    key: number
  ) => (
    <a
      key={key}
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      style={{
        flexShrink: 0,
        width: "160px",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "#fff",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          background: item.bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: item.fontSize,
            fontWeight: 900,
            color: item.textColor,
            letterSpacing: "-1px",
          }}
        >
          {item.text}
        </span>
      </div>
      <p style={{ padding: "10px 12px", fontSize: "0.8rem", fontWeight: 700 }}>
        {item.label}
      </p>
    </a>
  );

  const allCards = [
    ...resourceItems.map((item, i) => renderImageCard(item, i)),
    renderTextCard(gptItem, 100),
    renderTextCard(youtubeItem, 101),
    // Duplicated for infinite scroll
    ...resourceItems.map((item, i) => renderImageCard(item, i + 200)),
    renderTextCard(gptItem, 300),
    renderTextCard(youtubeItem, 301),
  ];

  return (
    <section style={{ padding: "48px 0", background: "#FAFAFA", overflow: "hidden" }}>
      <div className="container" style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "2px",
                textTransform: "uppercase" as const,
                marginBottom: "8px",
              }}
            >
              Free Resources
            </p>
            <h2
              className="section-title"
              style={{ textAlign: "left", fontSize: "1.5rem", marginBottom: 0 }}
            >
              무료 자료 모음
            </h2>
          </div>
          <a
            href="/resources"
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "var(--accent)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            전체 보기 &rarr;
          </a>
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="resource-slider"
          style={{
            display: "flex",
            gap: "16px",
            width: "max-content",
            animation: "resourceScroll 20s linear infinite",
            padding: "0 24px",
          }}
        >
          {allCards}
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "60px",
            background: "linear-gradient(to right, #FAFAFA, transparent)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "60px",
            background: "linear-gradient(to left, #FAFAFA, transparent)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      </div>
    </section>
  );
}
