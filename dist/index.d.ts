import { CallbackFunction, IDeployConfig, ISyncOptions } from './IonicCordova';
export declare class DeployClass implements IDeployPluginAPI {
    configure(config: IDeployConfig): Promise<void>;
    getConfiguration(): Promise<import("./IonicCordova").ICurrentConfig>;
    checkForUpdate(): Promise<import("./IonicCordova").CheckForUpdateResponse>;
    downloadUpdate(progress?: CallbackFunction<number>): Promise<boolean>;
    extractUpdate(progress?: CallbackFunction<number>): Promise<boolean>;
    reloadApp(): Promise<boolean>;
    sync(options: ISyncOptions, progress?: CallbackFunction<number>): Promise<import("./IonicCordova").ISnapshotInfo | undefined>;
    getCurrentVersion(): Promise<import("./IonicCordova").ISnapshotInfo | undefined>;
    getAvailableVersions(): Promise<import("./IonicCordova").ISnapshotInfo[]>;
    deleteVersionById(versionId: string): Promise<boolean>;
    getVersionById(versionId: string): Promise<import("./IonicCordova").ISnapshotInfo | undefined>;
}
export declare const Deploy: DeployClass;
