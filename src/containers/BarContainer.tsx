import {Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {useSelector} from "react-redux";
import {IStore} from "../store/store";

function BarContainer() {
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);
    const data = [];
    for (let i = 1; i <= stepsNumber; i++) {
        data.push({
            step: i,
        })
    }

    const activeNode = useSelector((state: IStore) => state.activeNode);
    const disableLevels = useSelector((state: IStore) => state.disableLevels);
    const getColor = (level: number) => {
        return (activeNode && activeNode.name === level) ? "#FF0000" : disableLevels.includes(level) ? "#808080" : "#ADD8E6FF";
    }

    return (
        <>
            <BarChart barCategoryGap={0} width={600} height={400} data={data} layout="vertical">
                <XAxis type="number" hide/>
                <YAxis type="category" hide/>
                <Bar dataKey="step" label>
                {

                    data.map((step, index) => {
                        return (
                            <Cell key={`cell-${index}`} fill={getColor(index)}  stroke="#2f4f4f"  />
                        )
                    })
                }
                </Bar>
            </BarChart>
        </>
    );
}

export default BarContainer;