import { providers } from 'near-api-js';

export class ArcadeNearProvider extends providers.JsonRpcProvider {
  sendTransaction(signedTransaction) {
    // Encode with the transaction's own SDK version before handing bytes to RPC.
    const signed_tx_base64 = Buffer.from(signedTransaction.encode()).toString('base64');
    return this.sendJsonRpc('send_tx', { signed_tx_base64, wait_until: 'FINAL' });
  }
}
