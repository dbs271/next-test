import MyLayout from "@/components/Layout";

const Layout = (props) => {
  return (
    <>
      {props.child}
      <MyLayout />
    </>
  );
};

export default Layout;
