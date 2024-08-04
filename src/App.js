import { useEffect } from "react";
import { create } from "zustand";
const URL = "http://geek.itheima.net/v1_0/channels";
const useStore = create((set) => ({
  // 状态数据
  count: 0,
  // 修改状态数据的方法
  inc: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  des: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state; // 如果 count 为 0 或更小，则不做修改
    }),
  channelList: [],
  fetchGetList: async () => {
    const res = await fetch(URL);
    const jsonRes = await res.json();
    console.log(jsonRes);
  },
}));
function App() {
  const { count, inc, des, channelList, fetchGetList } = useStore();
  useEffect(() => {
    fetchGetList();
  }, [fetchGetList]);
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={inc}>+</button>
      </div>
      <div>
        <button onClick={des}>-</button>
      </div>
    </div>
  );
}

export default App;
