const OmOss = () => {
  return (
    <main>
      <h1>OmOss</h1>
      {<GetFaen />}
      <p>
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss OmOss
        OmOss OmOss OmOss OmOss OmOss
      </p>
    </main>
  );
};

export default OmOss;

const GetFaen = () => {
  let text = "";
  for (let i = 0; i < 10001; i++) text += "Om oss " + i + ". ";
  return <p>{text}</p>;
};
