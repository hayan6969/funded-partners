import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextVideo(nextConfig);
const withVideos = require('next-videos')

module.exports = withVideos()