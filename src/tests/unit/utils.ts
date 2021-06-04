import { Torrent, BaseTorrent } from '@/types';

const emptyBaseTorrent: BaseTorrent = {
  /* eslint-disable @typescript-eslint/camelcase */
  added_on: 0,
  amount_left: 0,
  auto_tmm: false,
  availability: 0,
  category: '',
  completed: 0,
  completion_on: 0,
  dl_limit: 0,
  dlspeed: 0,
  downloaded: 0,
  downloaded_session: 0,
  eta: 0,
  f_l_piece_prio: false,
  force_start: false,
  last_activity: 0,
  magnet_uri: '',
  max_ratio: 0,
  max_seeding_time: 0,
  name: '',
  num_complete: 0,
  num_incomplete: 0,
  num_leechs: 0,
  num_seeds: 0,
  priority: 0,
  progress: 0,
  ratio: 0,
  ratio_limit: 0,
  save_path: '',
  seeding_time_limit: 0,
  seen_complete: 0,
  seq_dl: false,
  size: 0,
  state: '',
  super_seeding: false,
  tags: '',
  time_active: 0,
  total_size: 0,
  tracker: '',
  up_limit: 0,
  uploaded: 0,
  uploaded_session: 0,
  upspeed: 0,
  /* eslint-enable @typescript-eslint/camelcase */
};

const emptyTorrent: Torrent = Object.assign({}, emptyBaseTorrent, {
  hash: '',
});

export function mock<T>(empty: T) {
  return (props: Partial<T>): T => Object.assign({}, empty, props);
}

export const mockBaseTorrent = mock(emptyBaseTorrent);
export const mockTorrent = mock(emptyTorrent);
