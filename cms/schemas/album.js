const album = {
  name: "album",
  title: "Album",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "artist",
      title: "Artist",
      type: "string",
    },
    {
      name: "releaseYear",
      title: "Release Year",
      type: "number",
    },
    {
      name: "choiceLyric",
      title: "Choice Lyric",
      type: "string",
    },
     {
      name: "recordedAt",
      title: "Recorded At",
      type: "string",
    },
    {
      name: "genre",
      title: "Genre",
      type: "reference",
      to: [{ type: "genre" }],
    },
    {
      name: "detail",
      title: "Detail",
      type: "blockContent",
    },
  ],
};

export default album;
