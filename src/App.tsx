import "./index.css";
import { getDateColor } from "./lib/color";

export function App() {
  return (
    <div
      style={{
        backgroundColor: getDateColor(new Date(), "dark"),
      }}
      className={`h-full w-full text-9xl font-(family-name:--font-zhuzimincho) flex items-center justify-center`}
    >
      测试标题
    </div>
  );
}

export default App;
