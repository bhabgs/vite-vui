/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-19 09:44:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-05-06 09:17:08
 */
import { baseObject } from '@/types';

export type iconsName =
  | 'vite_yasuo'
  | 'vite_JSON'
  | 'vite_HTML'
  | 'vite_JPG'
  | 'vite_PPT'
  | 'vite_TXT'
  | 'vite_GIF'
  | 'vite_PDF'
  | 'vite_DOCX'
  | 'vite_MP3'
  | 'vite_XML'
  | 'vite_MP4'
  | 'vite_XLS'
  | 'vite_PNG';

export type FileTypes =
  | 'ai'
  | 'arm'
  | 'css'
  | 'eps'
  | 'cad'
  | 'application/zip'
  | 'application/json'
  | 'html'
  | 'image/jpg'
  | 'ppt'
  | 'txt'
  | 'image/gif'
  | 'wav'
  | 'docx'
  | 'pdf'
  | 'ps'
  | 'mp3'
  | 'xml'
  | 'mp4'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.shee'
  | 'vid'
  | 'image/png';

const fileName: baseObject<iconsName> = {
  'image/png': 'vite_PNG',
  'application/zip': 'vite_yasuo',
  'application/x-rar': 'vite_yasuo',
  'application/json': 'vite_JSON',
  'image/jpg': 'vite_JPG',
  'image/jpeg': 'vite_JPG',
  'image/gif': 'vite_GIF',
  'application/vnd.ms-excel': 'vite_XLS',
  gzip: 'vite_yasuo',
  tag: 'vite_yasuo',
  html: 'vite_HTML',
  ppt: 'vite_PPT',
  pptx: 'vite_PPT',
  txt: 'vite_TXT',
  pdf: 'vite_GIF',
  docx: 'vite_DOCX',
  'audio/mpeg': 'vite_MP3',
  xml: 'vite_XML',
  'video/mp4': 'vite_MP4',
};

export const getFileType: (src: string) => iconsName = (src) => {
  return fileName[src] || 'vite_wenjianjiami';
};
