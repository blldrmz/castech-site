import { SiteShell } from "@/components/SiteShell";
import { HomeLanding } from "@/components/HomeLanding";
import { pageMeta } from "@/lib/seo";
import { PREFIXED } from "@/lib/i18n";

export const metadata = pageMeta(
  "Casino Equipment Supplier | Slot Machines, Gaming Tables, Chips & Jackpot Screens",
  "Casino equipment supplier based in Prague and Batumi. New gaming tables, chairs, chips, layouts and accessories, plus used slot machines, refurbished shufflers and custom LED jackpot screens.",
  "/",
);

// First-time visitors go to their browser language; a choice made in the language menu wins.
// Crawlers are never redirected.
const REDIRECT = `(function(){try{var L=${JSON.stringify(PREFIXED)},s=localStorage.getItem('lang');if(/bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent))return;if(s){if(L.indexOf(s)>-1)location.replace('/'+s+'/');return}var a=navigator.languages||[navigator.language];for(var i=0;i<a.length;i++){var c=String(a[i]).slice(0,2).toLowerCase();if(c==='en')return;if(L.indexOf(c)>-1){location.replace('/'+c+'/');return}}}catch(e){}})();`;

export default function Home() {
  return (
    <SiteShell>
      <script dangerouslySetInnerHTML={{ __html: REDIRECT }} />
      <HomeLanding />
    </SiteShell>
  );
}
