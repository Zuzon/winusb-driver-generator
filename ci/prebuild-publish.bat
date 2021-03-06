@echo off

if %APPVEYOR_REPO_BRANCH% == master (
  if %GITHUB_TOKEN% neq "" (
    npm run prebuilds --build_v8_with_gn=false -- --strip --runtime electron --target 1.7.15 --target 2.0.3 -u %GITHUB_TOKEN%
    npm run prebuilds --build_v8_with_gn=false -- --strip --runtime node --target 6.13.1 --target 8.10.0 --target 10.5.0 -u %GITHUB_TOKEN%
  )
)
