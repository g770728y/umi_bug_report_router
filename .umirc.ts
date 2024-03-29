import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'umi_route_bug_demo',
      dll: true,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
