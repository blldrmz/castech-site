import { pageMeta } from "@/lib/seo";
import { EquipmentGroupList } from "@/components/EquipmentGroupList";
import { PageHero } from "@/components/PageHero";
import { SectionCta } from "@/components/SectionCta";
import { SiteShell } from "@/components/SiteShell";
import { accessoryGroups, accessoriesPageHero } from "@/content/accessoriesContent";
import { accessoryGroupCoverById } from "@/content/sectionCovers";

export const metadata = pageMeta(
  "Casino floor accessories & operations equipment",
  "TITO, seating, service carts, table smallwares, key control and signage for casino floors, from CasTech EQ, a brand of Virexa AI Technologies.",
  "/accessories/",
);

export default function AccessoriesPage() {
  return (
    <SiteShell>
      <PageHero
        id="top"
        eyebrow={accessoriesPageHero.eyebrow}
        title={accessoriesPageHero.title}
        lead={accessoriesPageHero.lead}
      />
      <div className="bg-[#070d15]">
        <div className="castech-container castech-section-y pt-16 sm:pt-20">
          <EquipmentGroupList
            groups={accessoryGroups}
            coverById={accessoryGroupCoverById}
          />
        </div>
      </div>
      <SectionCta
        title="Build a par list with us"
        text="We bundle accessories with equipment orders so everything lands together—send your list or your pit standards."
      />
    </SiteShell>
  );
}
