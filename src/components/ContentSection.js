import React from "react";
import contentStyles from "./ContentSection.module.css";

const ContentSection = () => {
  const {
    contentSection,
    mainContent,
    headerWrapper,
    contentTextBlock,
    contentWrapperH1,
    intro,
    introCrux,
    introExpand,
    actionBar,
    seeMoreLink,
    getInTouchLink
  } = contentStyles;
  return (
    <>
      <main className={contentSection}>
        <div className={mainContent}>
          <header className={headerWrapper}>
            <div className={contentTextBlock}>
              <h1 className={contentWrapperH1}>
                <span className={intro}>Hi, I'm Vivek</span>
                <span className={introCrux}>
                  I am a Full-stack Java and React developer.
                </span>
              </h1>
              <p className={introExpand}>
                I'm a frontend and backend developer with a broad range of
                skills from frontend UX Design to backend database design
              </p>
              <div className={actionBar}>
                <a className={seeMoreLink}>See my Work</a>
                <a className={getInTouchLink}>Get in touch</a>
              </div>
            </div>
          </header>
          {/* <p style={{ overflow: "auto" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p> */}
        </div>
      </main>
    </>
  );
};

export default ContentSection;
