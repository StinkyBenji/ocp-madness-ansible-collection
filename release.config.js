module.exports = {
  branches: ["+([0-9])?(.{+([0-9]),x}).x", "main", "next"],
  preset: "conventionalcommits",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "docs", scope: "README", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
          noteKeywords: ["feat", "feature"],
        },
      },
    ],
    [
      "@semantic-release/exec",
      {
        verifyReleaseCmd: "echo ${nextRelease.version} > .VERSION",
      },
    ],
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
