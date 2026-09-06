import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "motion/react";

import lottaBody from "@/assets/lotta_body.png";
import lottaLeftLeg from "@/assets/lotta_left_leg.png";
import lottaRightLeg from "@/assets/lotta_right_leg.png";
import lottaHead from "@/assets/lotta_head.png";
import lottaLeftAntler from "@/assets/lotta_left_antler.png";
import lottaRightAntler from "@/assets/lotta_righ_antler.png";
import lottaLeftEye from "@/assets/lotta_left_eye.png";
import lottaRightEye from "@/assets/lotta_right_eye.png";
import lottaRightArm from "@/assets/lotta_right_arm.png";
import lottaLeftArm from "@/assets/lotta_left_arm.png";
import { cn } from "@/lib/utils";

const CANVAS_WIDTH = 261;
const CANVAS_HEIGHT = 507;

const layerStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

type LottaProps = {
  isWaving: boolean;
  isWalking: boolean;
  waveOnHover?: boolean;
  onWaveComplete?: () => void;
  className?: string;
};

export function Lotta({ isWaving, isWalking, waveOnHover, onWaveComplete, className }: LottaProps) {
  // Blink loop: squeeze the eyes closed every 3-5s (randomized per cycle).
  const [blinking, setBlinking] = useState(false);
  useEffect(() => {
    if (blinking) {
      const t = setTimeout(() => setBlinking(false), 75);
      return () => clearTimeout(t);
    }
    const delay = 3000 + Math.random() * 2000;
    const t = setTimeout(() => setBlinking(true), delay);
    return () => clearTimeout(t);
  }, [blinking]);

  // Wave: gentle asymmetric rock around the arm's already-raised resting pose.
  const waveControls = useAnimationControls();
  const onWaveCompleteRef = useRef(onWaveComplete);
  onWaveCompleteRef.current = onWaveComplete;
  const waveTriggeredRef = useRef(false);
  const waveBusyRef = useRef(false);

  // The arm is drawn already raised, so the wave rocks around 0deg. Outward
  // motion (away from the head) goes to -10deg; inward stays capped at +3deg
  // so the hand never nears the face. Keyframes start and end at exactly 0 to
  // keep the resting frame identical to the unrotated artwork. If the hand
  // swings toward the body instead, flip the sign of the keyframes.
  const runWave = useCallback(() => {
    if (waveBusyRef.current) return;
    waveBusyRef.current = true;
    waveControls
      .start({
        rotate: [0, -28, 8, -28, 8, -28, 0],
        transition: {
          duration: 1.1,
          ease: "easeInOut",
          times: [0, 0.16, 0.32, 0.48, 0.64, 0.8, 1],
        },
      })
      .then(() => {
        waveBusyRef.current = false;
        onWaveCompleteRef.current?.();
      });
  }, [waveControls]);

  useEffect(() => {
    if (!isWaving) {
      waveTriggeredRef.current = false;
      return;
    }
    if (waveTriggeredRef.current) return;
    waveTriggeredRef.current = true;
    runWave();
  }, [isWaving, runWave]);

  // Wave each time the pointer hovers over the character.
  const handlePointerEnter = useCallback(() => {
    if (!waveOnHover) return;
    waveTriggeredRef.current = true;
    runWave();
  }, [waveOnHover, runWave]);

  // Walk: legs swing in a scissor pattern while walking, easing back to rest.
  const leftLegControls = useAnimationControls();
  const rightLegControls = useAnimationControls();
  useEffect(() => {
    if (isWalking) {
      // Left and right legs swing out of phase (mirrored keyframes).
      leftLegControls.start({
        rotate: [0, -18, 0, 18, 0, -18, 0, 18, 0],
        transition: { duration: 0.6, ease: "easeInOut", repeat: Infinity },
      });
      rightLegControls.start({
        rotate: [18, 0, -18, 0, 18, 0, -18, 0, 18],
        transition: { duration: 0.6, ease: "easeInOut", repeat: Infinity, delay: 0 },
      });
    } else {
      // Ease legs back to their resting position rather than snapping.
      leftLegControls.start({
        rotate: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      });
      rightLegControls.start({
        rotate: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    }
  }, [isWalking, leftLegControls, rightLegControls]);

  // Walk bob: the whole character bobs at twice the leg frequency while walking.
  const outerControls = useAnimationControls();
  useEffect(() => {
    if (isWalking) {
      outerControls.start({
        y: [0, -4, 0, -4, 0],
        transition: { duration: 0.3, ease: "easeInOut", repeat: Infinity },
      });
    } else {
      outerControls.start({
        y: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    }
  }, [isWalking, outerControls]);

  return (
    <motion.div
      animate={outerControls}
      onPointerEnter={handlePointerEnter}
      className={cn("relative", className)}
      style={{ aspectRatio: `${CANVAS_WIDTH} / ${CANVAS_HEIGHT}`, maxWidth: CANVAS_WIDTH }}
    >
      {/* left arm — wave on trigger, pivoting around the shoulder joint.
          Rendered before the body so the shoulder nestles slightly behind it. */}
      <motion.img
        src={lottaLeftArm}
        alt=""
        style={{ ...layerStyle, transformOrigin: "30% 42%" }}
        animate={waveControls}
      />

      {/* body (root, static — inherits the walk bob from the outer wrapper) */}
      <img src={lottaBody} alt="" style={layerStyle} />

      {/* left leg — scissor swing while walking, pivoting at the hip joint */}
      <motion.img
        src={lottaLeftLeg}
        alt=""
        style={{ ...layerStyle, transformOrigin: "40% 62%" }}
        animate={leftLegControls}
      />

      {/* right leg — scissor swing out of phase with the left leg */}
      <motion.img
        src={lottaRightLeg}
        alt=""
        style={{ ...layerStyle, transformOrigin: "58% 62%" }}
        animate={rightLegControls}
      />

      {/* head — idle sway, pivoting around the neck joint */}
      <motion.img
        src={lottaHead}
        alt=""
        style={{ ...layerStyle, transformOrigin: "50% 38%" }}
        animate={{ rotate: [0, -3, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />

      {/* antlers (static, sit on top of head) */}
      <img src={lottaLeftAntler} alt="" style={layerStyle} />
      <img src={lottaRightAntler} alt="" style={layerStyle} />

      {/* eyes — two separate PNGs, blinked in sync via a shared parent */}
      <motion.div
        style={{ ...layerStyle, transformOrigin: "50% 33%" }}
        animate={blinking ? { scaleY: 0.1 } : { scaleY: 1 }}
        transition={{ duration: 0.075, ease: "easeInOut" }}
      >
        <img src={lottaLeftEye} alt="" style={layerStyle} />
        <img src={lottaRightEye} alt="" style={layerStyle} />
      </motion.div>

      {/* right arm (static) */}
      <img src={lottaRightArm} alt="" style={layerStyle} />
    </motion.div>
  );
}
