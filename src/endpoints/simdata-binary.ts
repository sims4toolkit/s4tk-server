import { SimDataResource } from "@s4tk/models";

/**
 * Parses the given XML content as a SimData and returns it in binary format.
 * 
 * @param xml SimData XML to convert
 */
export default async function simDataXmlToBinary(xml: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      SimDataResource.fromXmlAsync(xml).then(simdata => {
        resolve(simdata.buffer);
      });
    } catch (err) {
      reject(err);
    }
  });
}
