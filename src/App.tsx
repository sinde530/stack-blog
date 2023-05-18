import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { GlobalStyle } from './common/global';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
