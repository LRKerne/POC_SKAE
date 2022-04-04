import { Wrapper } from "./Chart.styles";
import { ResponsiveContainer, RadarChart,PolarGrid,PolarAngleAxis, PolarRadiusAxis, Radar, Legend} from "recharts";

const Chart = (userData: any) => {
  const data = [
    {
      "subject": "category",
      "A": 5,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Chinese",
      "A": 4,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "English",
      "A": 3,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Geography",
      "A": 5,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "Physics",
      "A": 7,
      "B": 7,
      "fullMark": 10
    },
    {
      "subject": "History",
      "A": 4,
      "B": 7,
      "fullMark": 10
    }
  ]
  
  return (
    <Wrapper>
      <h3 className="title">Grafico User X Ideal</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <RadarChart outerRadius={90} width={200} height={150} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />
          <Radar
            name="User"
            dataKey="A"
            stroke="#0086b3"
            fill="#0086b3"
            fillOpacity={0.6}
          />
          <Radar
            name="Ideal"
            dataKey="B"
            stroke="#74dafc"
            fill="#74dafc"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default Chart;
