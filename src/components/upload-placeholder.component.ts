import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-upload-file-placeholder',
  template: `
    <style>
      .loader {
        width: 16px;
        height: 16px;
        border: 2px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        opacity: 0.6;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .loading-box {
        width: 120px;
        height: 120px;
        border-radius: 8px;
        position: relative;
        background-color: #ccc;

        .loading-status {
          background-color: #333;
          border-radius: 8px;
          text-align: right;
          position: absolute;
          z-index: 2;
          bottom: 0;
          right: 0;
          padding: 4px;
          opacity: 0.8;

          .progess {
            display: inline-block;
            margin-left: 16px;
            color: #fff;
            font-size: 10px;
            font-family: sans-serif;
            font-weight: 400;
          }
        }
      }
    </style>

    <div class="loading-box">
      <div class="loading-status">
        <span class="loader"></span>
        <span class="progess">20%</span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFilePlaceHolder {}
