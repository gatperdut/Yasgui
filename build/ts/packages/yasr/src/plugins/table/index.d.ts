/// <reference types="datatables.net" />
import { Plugin, DownloadInfo } from "../";
import Yasr from "../../";
export interface PluginConfig {
  openIriInNewWindow: boolean;
  tableConfig: DataTables.Settings;
}
export interface PersistentConfig {
  pageSize?: number;
}
export default class Table implements Plugin<PluginConfig> {
  private config;
  private persistentConfig;
  private yasr;
  private tableControls;
  private dataTable;
  private tableFilterField;
  private tableSizeField;
  helpReference: string;
  label: string;
  priority: number;
  getIcon(): HTMLDivElement;
  constructor(yasr: Yasr);
  static defaults: PluginConfig;
  private getRows;
  private getUriLinkFromBinding;
  private getCellContent;
  private formatLiteral;
  private getColumns;
  private getSizeFirstColumn;
  draw(persistentConfig: PersistentConfig): void;
  private handleTableSearch;
  private handleTableSizeSelect;
  drawControls(): void;
  download(filename?: string): DownloadInfo;
  canHandleResults(): boolean;
  private removeControls;
  destroy(): void;
}
