
import React, { createContext, useContext } from 'react';
import { childrenObj } from '../Type';
import { NoticeLogicProvider, PadBoxLogicProvider, ReportLogicProvider, StatisticsLogicProvider } from './';

// 모든 콘트롤러를 한꺼번에 모아주는 부분
export const LogicProvider = ({ children } : childrenObj) => (
	<NoticeLogicProvider>
		<PadBoxLogicProvider>
			<ReportLogicProvider>
				<StatisticsLogicProvider>
					{children}
				</StatisticsLogicProvider>
			</ReportLogicProvider>
		</PadBoxLogicProvider>
	</NoticeLogicProvider>
);