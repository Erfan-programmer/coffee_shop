import Layout from "@/components/layouts/UserPanelLayout";
import Tickets from "@/components/templates/p-user/tickets/Tickets";
import ژonnectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import TicketModel from "@/models/Ticket";

const page = async () => {
  ژonnectToDB();
  const user = await authUser();
  const tickets = await TicketModel.find({ user: user?._id })
    .populate("department", "title")
    .sort({ _id: -1 });
  return (
    <Layout>
      <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
    </Layout>
  );
};

export default page;
