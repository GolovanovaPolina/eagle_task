import {Bar, BarChart, Cell, LabelList, XAxis, YAxis} from "recharts";
import {useSelector} from "react-redux";
import {IStore} from "../store/store";

function BarContainer() {
    const stepsNumber = useSelector((store: IStore) => store.stepsNum);
    const data = [];
    for (let i = 1, j = stepsNumber; i <= stepsNumber; i++, j--) {
        data.push({
            step: i,
            label: j,
        })
    }

    const activeNode = useSelector((state: IStore) => state.activeNode);
    const disableLevels = useSelector((state: IStore) => state.disableLevels);
    const getColor = (index: number) => {
        const level = stepsNumber - index;
        return (activeNode && activeNode.name === level) ? "#FF0000" : disableLevels.includes(level) ? "#ADD8E6FF" : "#808080";
    }

    return (
        <>
            <BarChart barCategoryGap={0} width={500} height={500} data={data} layout="vertical">
                <XAxis type="number" hide/>
                <YAxis type="category" hide/>
                <Bar dataKey="step">
                {

                    data.map((step, index) => {
                        return (
                            <Cell key={`cell-${index}`} fill={getColor(index)}  stroke="#2f4f4f"  />

                        )
                    })
                }
                <LabelList dataKey="label" position="center" />
                </Bar>
            </BarChart>
        </>
    );
}

export default BarContainer;