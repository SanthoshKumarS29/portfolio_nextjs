import MyWorksDetailPage from "@/views/workDetailComponents/MyWorksDetailPage";

export default async function WorksDetail({ params }){

    const { slug } = await params;

    return (
        <MyWorksDetailPage slug = {slug} />
    );
}