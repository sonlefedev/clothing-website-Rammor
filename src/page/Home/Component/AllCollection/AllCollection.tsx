import HeadingFullWidth from "../../../../component/common/HeadingFullWidth";
import Collection from "../../../../component/Collection";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { FakeDataByMap } from "../../../../fake-data/fakeData";
import { useCallback } from "react";

type Props = {};
const cx = classNames.bind(style);

const AllCollection = (props: Props) => {

    const dataCollection = useCallback(
        (collectionName: string, data: Map<string, IDataProduct>) => {
            let _data = Array.from(data.values());
            _data = _data
                .filter((p) => p.collectionName === collectionName)
                .sort((a, b) => 0.5 - Math.random())
                .slice(0, 4)
            return _data  
        },
        []
    );
    return (
        <div className={cx("wrapper-all-collection")}>
            <HeadingFullWidth sub="summer memories and warm nostalgia">
                <>All collections.</>
            </HeadingFullWidth>
            <Collection
                title="summer nostalgia collection."
                data={dataCollection('nostalgia', FakeDataByMap)}
            />
            <Collection title="basic collection." data={dataCollection('basic', FakeDataByMap)} />
            <Collection title="summer vibes collection." data={dataCollection('vibes', FakeDataByMap)} />
        </div>
    );
};

export default AllCollection;
