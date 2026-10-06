import DashboardSkeleton from '@/app/ui/skeletons';

// ロード中の表示
// 現状C:\Users\user\Documents\NextJs\Next_js_tutorial\app\lib\data.tsにて表示を3秒遅延させている
export default function Loading() {
    // 「loading...」と表示させる
    //return <div>Loading...</div>;
    
    // スケルトン表示
    return <DashboardSkeleton />;
}