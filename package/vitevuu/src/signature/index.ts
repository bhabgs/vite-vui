type SignatureConfig = {
  ele: string;
  autoFit?: Boolean;
  width?: string;
  height?: string;
};

class Signature {
  constructor(opt: SignatureConfig) {
    this.reset(opt);
    this.setEvent();
  }

  public dom!: HTMLElement;

  protected renderState: Boolean = false;

  protected setEvent() {
    this.dom.addEventListener('mousedown', () => {
      this.renderState = true;
    });
    this.dom.addEventListener('mouseup', () => {
      this.renderState = false;
    });

    this.dom.addEventListener('mousemove', (e) => {
      console.log(e);
    });
  }

  protected reset(opt: SignatureConfig) {
    this.dom = document.getElementById(opt.ele)!;
    if (opt.width) {
      this.dom.style.width = opt.width;
    }
    if (opt.height) {
      this.dom.style.height = opt.height;
    }

    if (opt.autoFit) {
      this.dom.style.width = '100%';
      this.dom.style.height = '100%';
    }
  }
}

export default Signature;
