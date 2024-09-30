// import { React, Suspense, lazy } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import RouteChangeTracker from '../utils/RouteChangeTracker';
// import ContestDetailPage from '../pages/ContestDetailPage/ContestDetailPage';
// import PdfUserApplication from '../pages/ProfileRecruit/PdfUserApplication';
// const ContestListPage = lazy(
//     () => import('../pages/ContestListPage/ContestListPage'),
// );
// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const DefaultLayout = lazy(() => import('../Layout/DefaultLayout'));
// const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
// const MakePortfolio = lazy(() => import('../pages/Portfolio/MakePortfolio'));
// const UsePortfolio = lazy(() => import('../pages/Portfolio/UsePortfolio'));
// const TeamPart = lazy(
//     () => import('../pages/ProfileParticipated/ParticipatedTeam'),
// );
// const TeamSupport = lazy(() => import('../pages/ProfileApplied/AppliedTeam'));
// const TeamPortfolio = lazy(() => import('../pages/Portfolio/MyPortfolio'));
// const Calendar = lazy(() => import('../pages/CalendarPage/Calendar'));
// const DetailPageContest = lazy(
//     () => import('../pages/DetailPage/DetailPageContest'),
// );
// const DetailPageProject = lazy(
//     () => import('../pages/DetailPage/DetailPageProject'),
// );
// const Login = lazy(() => import('../components/Auth/Login'));
// const KakaoRedirectPage = lazy(
//     () => import('../components/Auth/KakaoRedirectPage'),
// );
// const TeamBuildPage = lazy(
//     () => import('../pages/TeamBuildPage/TeamBuildPage'),
// );
// const PostMainPage = lazy(() => import('../pages/PostMainPage/PostMainPage'));
// const ProfileRecruit = lazy(
//     () => import('../pages/ProfileRecruit/ProfileRecruit'),
// );
// const RecruitedTeam = lazy(
//     () => import('../pages/ProfileRecruited/RecruitedTeam'),
// );
// const MyInfo = lazy(() => import('../pages/ProfileInfo/MyInfo'));
// const Scrap = lazy(() => import('../pages/ScrapPage/Scrap'));
// const ScrollToTop = lazy(() => import('../pages/HomePage/ScrollToTop'));

// const Router = () => {
//     return (
//         <Suspense>
//             <BrowserRouter>
//                 <ScrollToTop>
//                     <RouteChangeTracker />
//                     <Routes>
//                         <Route element={<DefaultLayout />}>
//                             <Route path="/" element={<HomePage />} />
//                             <Route
//                                 path="/contestList"
//                                 element={<ContestListPage />}
//                             />
//                             <Route
//                                 path="/contestList/:id"
//                                 element={<ContestDetailPage />}
//                             />
//                             <Route path="/contest" element={<PostMainPage />} />
//                             <Route path="/project" element={<PostMainPage />} />
//                             <Route path="/calendar" element={<Calendar />} />
//                             <Route
//                                 path="/teambuild"
//                                 element={<TeamBuildPage />}
//                             />
//                             <Route path="/profile" element={<ProfilePage />} />
//                             <Route
//                                 path="/recruitedTeam"
//                                 element={<RecruitedTeam />}
//                             />
//                             <Route
//                                 path="/appliedTeam"
//                                 element={<TeamSupport />}
//                             />
//                             <Route
//                                 path="/participatedTeam"
//                                 element={<TeamPart />}
//                             />
//                             <Route path="/scrap" element={<Scrap />} />
//                             <Route
//                                 path="/teamPortfolio"
//                                 element={<TeamPortfolio />}
//                             />

//                             <Route
//                                 path="/contest/:contest_id/team/:team_id"
//                                 element={<DetailPageContest />}
//                             />
//                             <Route
//                                 path="/project/:id"
//                                 element={<DetailPageProject />}
//                             />

//                             <Route path="/login" element={<Login />} />
//                             <Route
//                                 path="/teamdetail/:id"
//                                 element={<ProfileRecruit />}
//                             />
//                             <Route path="/myinfo" element={<MyInfo />} />
//                             <Route
//                                 path="/kakao/callback"
//                                 element={<KakaoRedirectPage />}
//                             />
//                             <Route
//                                 path="/profile/makeportfolio"
//                                 element={<MakePortfolio />}
//                             />
//                             <Route
//                                 path="/profile/useportfolio"
//                                 element={<UsePortfolio />}
//                             />

//                             <Route
//                                 path="/profile/makeportfolio/:id"
//                                 element={<MakePortfolio />}
//                             />

//                             <Route
//                                 path="/profile/useportfolio/:id"
//                                 element={<UsePortfolio />}
//                             />
//                         </Route>

//                         {/* 지원서 보기 부분은 헤더 제거 */}
//                         <Route
//                             path="/application/:id"
//                             element={<PdfUserApplication />}
//                         />
//                     </Routes>
//                 </ScrollToTop>
//             </BrowserRouter>
//         </Suspense>
//     );
// };
// export default Router;
import { React, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteChangeTracker from '../utils/RouteChangeTracker';
import ContestDetailPage from '../pages/ContestDetailPage/ContestDetailPage';
import PdfUserApplication from '../pages/ProfileRecruit/PdfUserApplication';
import ContestListPage from '../pages/ContestListPage/ContestListPage';
import HomePage from '../pages/HomePage/HomePage';
import DefaultLayout from '../Layout/DefaultLayout';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import MakePortfolio from '../pages/Portfolio/MakePortfolio';
import UsePortfolio from '../pages/Portfolio/UsePortfolio';
import TeamPart from '../pages/ProfileParticipated/ParticipatedTeam';
import TeamSupport from '../pages/ProfileApplied/AppliedTeam';
import TeamPortfolio from '../pages/Portfolio/MyPortfolio';
import Calendar from '../pages/CalendarPage/Calendar';
import DetailPageContest from '../pages/DetailPage/DetailPageContest';
import DetailPageProject from '../pages/DetailPage/DetailPageProject';
import Login from '../components/Auth/Login';
import KakaoRedirectPage from '../components/Auth/KakaoRedirectPage';
import TeamBuildPage from '../pages/TeamBuildPage/TeamBuildPage';
import PostMainPage from '../pages/PostMainPage/PostMainPage';
import ProfileRecruit from '../pages/ProfileRecruit/ProfileRecruit';
import RecruitedTeam from '../pages/ProfileRecruited/RecruitedTeam';
import MyInfo from '../pages/ProfileInfo/MyInfo';
import Scrap from '../pages/ScrapPage/Scrap';
import ScrollToTop from '../pages/HomePage/ScrollToTop';


const Router = () => {
    return (
        <Suspense>
            <BrowserRouter>
                <ScrollToTop>
                    <RouteChangeTracker />
                    <Routes>
                        <Route element={<DefaultLayout />}>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/contestList"
                                element={<ContestListPage />}
                            />
                            <Route
                                path="/contestList/:id"
                                element={<ContestDetailPage />}
                            />
                            <Route path="/contest" element={<PostMainPage />} />
                            {/* <Route path="/project" element={<PostMainPage />} /> */}
                            {/* <Route path="/calendar" element={<Calendar />} /> */}
                            <Route
                                path="/teambuild"
                                element={<TeamBuildPage />}
                            />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route
                                path="/recruitedTeam"
                                element={<RecruitedTeam />}
                            />
                            <Route
                                path="/appliedTeam"
                                element={<TeamSupport />}
                            />
                            <Route
                                path="/participatedTeam"
                                element={<TeamPart />}
                            />
                            <Route path="/scrap" element={<Scrap />} />
                            <Route
                                path="/teamPortfolio"
                                element={<TeamPortfolio />}
                            />

                            <Route
                                path="/contest/:contest_id/team/:team_id"
                                element={<DetailPageContest />}
                            />
                            <Route
                                path="/project/:id"
                                element={<DetailPageProject />}
                            />

                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/teamdetail/:id"
                                element={<ProfileRecruit />}
                            />
                            <Route path="/myinfo" element={<MyInfo />} />
                            <Route
                                path="/kakao/callback"
                                element={<KakaoRedirectPage />}
                            />
                            <Route
                                path="/profile/makeportfolio"
                                element={<MakePortfolio />}
                            />
                            <Route
                                path="/profile/useportfolio"
                                element={<UsePortfolio />}
                            />

                            <Route
                                path="/profile/makeportfolio/:id"
                                element={<MakePortfolio />}
                            />

                            <Route
                                path="/profile/useportfolio/:id"
                                element={<UsePortfolio />}
                            />
                        </Route>

                        {/* 지원서 보기 부분은 헤더 제거 */}
                        <Route
                            path="/application/:id"
                            element={<PdfUserApplication />}
                        />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </Suspense>
    );
};
export default Router;
