import React from "react";
import ResourceLinkData from "../Data/ResourceLinksData";

const ResourceLinks = () => {
  return (
    <>
      <ul>
        {ResourceLinkData &&
          ResourceLinkData.sort((a, b) => a.title.localeCompare(b.title)).map(
            (resource, indexResource) => (
              <li key={indexResource}>
                <a
                  href={resource.href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {resource.title}
                </a>
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default ResourceLinks;
