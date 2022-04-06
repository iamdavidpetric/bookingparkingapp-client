import { Card, Progressbar } from "../../components";
import { BOOKING_PATH } from "../../../logic/routes/paths";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate(BOOKING_PATH)}>
        <Card
          href="https://www.google.com"
          title="Cluj Napoca"
          src={`https://i.guim.co.uk/img/media/ccc826cd2961f5dc64b3e1283ac4224eab46a77f/0_383_5746_3448/master/5746.jpg?width=1020&quality=85&auto=format&fit=max&s=968f9b9234aadb3f5bc5e7bc289fa7ca`}
        >
          <Progressbar percentage={29} color="blue" />
          Parcare Mihai Viteaza
        </Card>
      </div>
      <Card
        href="https://www.google.com"
        title="Brasov"
        src={`https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/10/brasov-min.jpg`}
      >
        <Progressbar percentage={9} color="red" />
        Parcare Republicii
      </Card>

      <Card
        href="https://www.google.com"
        title="Timisoara"
        src={`https://www.romaniajournal.ro/wp-content/uploads/2015/09/twa_blogpic_timisoara-4415.jpg`}
      >
        <Progressbar percentage={60} color="blue" />
        Parcare Dorobantilor
      </Card>
    </div>
  );
};

export default Home;
