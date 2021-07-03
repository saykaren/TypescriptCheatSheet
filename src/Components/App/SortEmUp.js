import React from "react";

const SortEmUp = () => {
  return (
    <div className="instructionalBox">
      <p>{`{SectionData.data
        .sort((a, b) => a.title.localeCompare(b.title)
        )`}</p>
    </div>
  );
};

export default SortEmUp;
