import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CHANGELOG from "../../CHANGELOG.md";
import ReactMarkdown from "react-markdown";

const PageContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  marginBottom: "2rem",
});

const TitleContainer = styled("div")({
  justifyContent: "left",
  textAlign: "left",
  width: "100%",
  paddingBottom: "1rem",
});

const markdownToRemove = `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Generated by [\`auto-changelog\`](https://github.com/CookPete/auto-changelog).`;

const ChangelogPage: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(CHANGELOG)
      .then((res) => res.text())
      .then((text) => setMarkdown(text.replace(markdownToRemove, "")));
  }, []);

  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">Releases</Typography>
                <Typography variant="body1">
                  <strong>
                    This is a changelog for the NSHM webapp service. The changelog tracks updates only to the web
                    interface and not to the model itself. Updates to the model can be found on the{" "}
                    <Link to={"/Resources/ModelVersions"}>Model Versions page.</Link>
                  </strong>
                </Typography>
              </TitleContainer>
            </Grid>
            <Grid item>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

export default ChangelogPage;
