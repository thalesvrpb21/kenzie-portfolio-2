import { styled } from "@/styles/stitches.config";
import { Text } from "../../styles/Text";

export const SectionAbout = styled("section", {
    color: "$grey5",

    display: "flex",
    flexDirection: "column",
    gap: 25,
    marginBottom: 45

})

export const ArticleAbout = styled("article", {
    fontSize: "0.9rem",
    fontWeight: "500",
    lineHeight: 1.3
})