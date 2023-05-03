export class Food {
  name: string;
  image?: string;
  checked: boolean;

  constructor(name: string, image?: string) {
    this.name = name;
    this.image = image;
    this.checked = true;
  }

  toggleChecked() {
    this.checked = !this.checked;
    console.log(this.name, this.checked);
  }
}
