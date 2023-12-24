// unity-page/2

import AimLab from "@/components/AimLab";

const Home = (props) => {
  const id = props.params.id;

  return (
    <div>
      <h2>Page {props.params.id}</h2>
      <AimLab id={id} />
    </div>
  );
};

export default Home;
