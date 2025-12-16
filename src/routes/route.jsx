import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Layout from '../Layout.jsx'
import Services from '../pages/Services.jsx'
import JobBoard from '../pages/JobBoard.jsx'
import Ramblings from '../pages/Ramblings.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Contact2 from '../pages/Contact2.jsx'
import Terms from '../pages/Terms.jsx'
import Privacy from '../pages/Privacy.jsx'
import Cookies from '../pages/Cookies.jsx'
import NotFound from '../pages/NotFound.jsx'
import CareerIndex from '../pages/CareerIndex.jsx'
import JobDetail from '../pages/JobDetail.jsx'
import JobBoardDetail from '../pages/JobBoardDetail.jsx'
import BlogDetail from '../pages/BlogDetail.jsx'
import CaseStudies from '../pages/CaseStudies.jsx'
import PostCaseStudy from '../pages/PostCaseStudy.jsx'

function RoutesTree() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="services" element={<Services />} />
				<Route path="job-board" element={<JobBoard />} />
				<Route path="ramblings" element={<Ramblings />} />
				<Route path="case-studies" element={<CaseStudies />} />
				<Route path="case-study/:id" element={<PostCaseStudy />} />
				<Route path="blog/:id" element={<BlogDetail />} />
				<Route path="contact" element={<Contact />} />
						<Route path="contact-brand" element={<Contact2 />} />
						<Route path="terms" element={<Terms />} />
						<Route path="privacy-policy" element={<Privacy />} />
						<Route path="cookies" element={<Cookies />} />
									<Route path="careers" element={<CareerIndex />} />
									<Route path="job/:id" element={<JobDetail />} />
				<Route path="jobs/:jobId" element={<JobBoardDetail />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export function AppRoutes() {
	return <RoutesTree />
}

export default function Router() {
	return (
		<BrowserRouter>
			<RoutesTree />
		</BrowserRouter>
	)
}
