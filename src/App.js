import "./css/style.css";
import NavbarComponent from "./components/NavbarComponent";
import CardComponents from "./components/CardComponents";
import FooterComponents from "./components/FooterComponents";
import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [pencapaian, setPencapaian] = useState([
    {
      id: 1,
      title: "Juara Balap Karung 17an",
      description:
        "Melakukan balap karung degan cara menyobekan karung di bagian kakinya",
      color: "primary",
      size: true,
    },
    {
      id: 2,
      title: "Juara Makan",
      description: "Sebelum Lomba alangkah baiknya puasa dulu selama 3 hari",
      color: "danger",
      size: false,
    },
    {
      id: 3,
      title: "Juara Balap Kelereng",
      description:
        "Gunakan lah sendok yang sudah di baluri lem atau gunakan kelereng yang kotak",
      color: "warning",
      size: true,
    },
  ]);

  return (
    <div className="app">
      <Layout>
        {pencapaian.map((data) => {
          const isLarge = data.size ? "danger" : "warning";
          return (
            <CardComponents 
              key={data.id}
              title={data.title}
              description={data.description}
              color={isLarge}
            />
          );
        })}
      </Layout>
    </div>
  );
}

export default App;
