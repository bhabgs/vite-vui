import { baseObject } from '@/types';

/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-04-19 09:44:52
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-04-19 10:11:45
 */
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
  | 'vite_PNG';

export type FileTypes =
  | 'ai'
  | 'arm'
  | 'css'
  | 'eps'
  | 'cad'
  | 'zip'
  | 'json'
  | 'html'
  | 'jpg'
  | 'ppt'
  | 'txt'
  | 'gif'
  | 'wav'
  | 'docx'
  | 'pdf'
  | 'ps'
  | 'mp3'
  | 'xml'
  | 'mp4'
  | 'xls'
  | 'vid'
  | 'png';

const fileName: baseObject<iconsName> = {
  png: 'vite_PNG',
  zip: 'vite_yasuo',
  gzip: 'vite_yasuo',
  tag: 'vite_yasuo',
  json: 'vite_JSON',
  html: 'vite_HTML',
  jpg: 'vite_JPG',
  ppt: 'vite_PPT',
  pptx: 'vite_PPT',
  txt: 'vite_TXT',
  gif: 'vite_GIF',
  pdf: 'vite_GIF',
  doc: 'vite_DOCX',
  docx: 'vite_DOCX',
  mp3: 'vite_MP3',
  xml: 'vite_XML',
  mp4: 'vite_MP4',
};

export const getFileType: (src: string) => iconsName = (src) => {
  const index = src.lastIndexOf('.');
  const name = src.substr(index + 1);
  return fileName[name] || 'vite_wenjianjiami';
};
