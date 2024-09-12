import { React, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteChangeTracker from '../utils/RouteChangeTracker';
import ContestDetailPage from '../pages/ContestDetailPage/ContestDetailPage';
const ContestListPage = lazy(
    () => import('../pages/ContestListPage/ContestListPage'),
);
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const DefaultLayout = lazy(() => import('../Layout/DefaultLayout'));
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));
const MakePortfolio = lazy(() => import('../pages/Portfolio/MakePortfolio'));
const UsePortfolio = lazy(() => import('../pages/Portfolio/UsePortfolio'));
const TeamPart = lazy(
    () => import('../pages/ProfileParticipated/ParticipatedTeam'),
);
const TeamSupport = lazy(() => import('../pages/ProfileApplied/AppliedTeam'));
const TeamPortfolio = lazy(() => import('../pages/Portfolio/MyPortfolio'));
const Calendar = lazy(() => import('../pages/CalendarPage/Calendar'));
const DetailPageContest = lazy(
    () => import('../pages/DetailPage/DetailPageContest'),
);
const DetailPageProject = lazy(
    () => import('../pages/DetailPage/DetailPageProject'),
);
const Login = lazy(() => import('../components/Auth/Login'));
const KakaoRedirectPage = lazy(
    () => import('../components/Auth/KakaoRedirectPage'),
);
const TeamBuildPage = lazy(
    () => import('../pages/TeamBuildPage/TeamBuildPage'),
);
const PostMainPage = lazy(() => import('../pages/PostMainPage/PostMainPage'));
const ProfileRecruit = lazy(
    () => import('../pages/ProfileRecruit/ProfileRecruit'),
);
const RecruitedTeam = lazy(
    () => import('../pages/ProfileRecruited/RecruitedTeam'),
);
const MyInfo = lazy(() => import('../pages/ProfileInfo/MyInfo'));
const Scrap = lazy(() => import('../pages/ScrapPage/Scrap'));
const ScrollToTop = lazy(() => import('../pages/HomePage/ScrollToTop'));

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
                            <Route path="/project" element={<PostMainPage />} />
                            <Route path="/calendar" element={<Calendar />} />
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
                                path="/contest/:id"
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
                        </Route>
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </Suspense>
    );
};
export default Router;
