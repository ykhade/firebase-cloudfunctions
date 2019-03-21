//All the cloud functions are exported to the index for invocation.

export {basicHTTP, api} from './http';
export {createUserRecord} from './auth';
export {gameCount, userTrend} from './firestore';
export {resizeAvatar} from './storage';