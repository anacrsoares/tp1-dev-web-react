import { useParams } from "react-router-dom";

const Forms: React.FC = () => {
  const params = useParams();

  const getParamType = () => {
    switch (params.type) {
      case "1":
        return "Sono";
      case "2":
        return "Amamentação";
      default:
        return "Fraldas";
    }
  };
  return getParamType();
};

export default Forms;
