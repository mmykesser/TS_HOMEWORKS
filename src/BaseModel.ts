import { ifcBaseModel } from './interface.js';

abstract class BaseModel implements ifcBaseModel {
  public createdAt: number = Date.now();
  public validate(): boolean {
    return true;
  }
}

export default BaseModel;
