abstract class BaseModel {
  createdAt = Date.now();
  validate() {
    return true;
  }
}

export default BaseModel;
