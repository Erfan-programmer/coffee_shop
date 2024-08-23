import Layout from "@/components/layouts/UserPanelLayout";
import AccountDetails from "@/components/templates/details/AccountDetails";
import { authUser } from "@/utils/serverHelpers";

const page = async () => {
  const user = await authUser()
  return (
    <Layout>
      <AccountDetails user={user}/>
    </Layout>
  );
};

export default page;
