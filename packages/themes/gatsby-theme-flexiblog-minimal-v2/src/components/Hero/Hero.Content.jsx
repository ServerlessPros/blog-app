import React from "react";
import { Heading } from "theme-ui";
import Divider from "@components/Divider";

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    background: (t) => `
      linear-gradient(
        45deg,
        ${t.colors.alpha} 32.5%,
        ${t.colors.betaDark} 50.5%)
    `,
    color: `beta`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    fontWeight: `bold`,
  },
  running: {
    color: `omegaDark`,
    fontWeight: `normal`,
    maxWidth: [`full`, null, `2/3`],
  },
};

export default () => (
  <>
    <Divider space={3} />
    <Heading variant="h1" sx={styles.heading}>
      From Zero To
      <br />
      Serverless
    </Heading>
    <Divider space={3} />
    <Heading variant="h3" sx={styles.running}>
      Too soon companies often move to the cloud without good understanding of
      the technologies offered and unwittingly lose up to 70% cost saving
      opportunities. We write about the strategies you can reduce the loss of
      cost savings by taking full advantage of cloud technologies.
    </Heading>
  </>
);
