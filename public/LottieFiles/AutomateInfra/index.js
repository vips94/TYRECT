// import cdnLottie from './lottie/cdn.lottie';
// import containerLottie from './lottie/container.lottie';
// import databaseLottie from './lottie/database.lottie';
// import dnsLottie from './lottie/dns.lottie';
// import eventProcessingLottie from './lottie/event_processing.lottie';
// import streamsLottie from './lottie/streaming_analytics.lottie';
// import virtualMachineLottie from './lottie/virtual_machine.lottie';
// import wafLottie from './lottie/waf.lottie';

import cdn from './json/cdn.json';
import container from './json/container.json';
import database from './json/database.json';
import dns from './json/dns.json';
import eventProcessing from './json/event_processing.json';
import streams from './json/streaming_analytics.json';
import virtualMachine from './json/virtual_machine.json';
import waf from './json/waf.json';

const edgeComputeVideos = [
  virtualMachine,
  ...(process.env.REACT_APP_MENU_LINKS_STATE !== 'true'
    ? [virtualMachine]
    : []),
    container,
  ...(process.env.REACT_APP_MENU_LINKS_STATE !== 'true'
    ? [container]
    : []),
];
const storageVideos = [virtualMachine, virtualMachine];
const cdnVideos = [cdn, dns];
const securityVideos = [waf];
const databaseVideos = [database, eventProcessing, streams];

export const automateInfraVideos = [
  edgeComputeVideos,
  storageVideos,
  cdnVideos,
  databaseVideos,
  securityVideos,
];
export const productVideos = {
  cdn,
  container,
  database,
  dns,
  eventProcessing,
  streams,
  virtualMachine,
  waf,
};
