import { pageMeta } from "@/lib/seo";
import { Suspense } from "react";import {SiteShell} from "@/components/SiteShell";import {CatalogueBrowser} from "@/components/CatalogueBrowser";
export const metadata=pageMeta("Casino Equipment Catalogue","CasTech EQ equipment catalogue: LED jackpot screens, slot machines, tables, chairs, chips, shufflers and casino accessories.","/catalog/");
export default function CataloguePage(){return <SiteShell><Suspense fallback={<div className="castech-container py-28 text-slate-300">Loading catalogue…</div>}><CatalogueBrowser/></Suspense></SiteShell>}