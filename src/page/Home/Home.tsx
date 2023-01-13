import classNames from "classnames/bind";
import style from "./style.module.scss";
import CommonLayout from "../CommonLayout";
import Banner from "../../component/base/Banner";
import DetailProduct from "../../component/base/DetailProduct";
import AllCollection from "./Component/AllCollection";
import { v4 } from "uuid";
import HeadingFullWidth from "../../component/common/HeadingFullWidth";
import { useEffect, useMemo } from "react";
import { FakeDataByMap } from "../../fake-data/fakeData";
const cx = classNames.bind(style);

type Props = {};

const Home = (props: Props) => {
    const FakeData: IDataProduct[] = useMemo(() => Array.from(FakeDataByMap.values()), []);

    return (
        <CommonLayout>
            <Banner />
            <HeadingFullWidth>Featured.</HeadingFullWidth>
            <DetailProduct data={FakeData[0]} type={"for-feature"} />
            <AllCollection />
        </CommonLayout>
    );
};

export default Home;
