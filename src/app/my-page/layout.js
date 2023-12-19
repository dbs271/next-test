import MyLayout from "@/components/Layout";

const Layout = (props) => {
  return (
    <>
      <MyLayout />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
